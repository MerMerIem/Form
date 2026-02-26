import ErrorText from "./ui/ErrorText";
import Section from "./ui/Section";
import Dropdown from "./ui/Dropdown";
import Input from "./ui/Input";

function Skills({ onChange, formData, errors }) {
  const toggleSkill = (skill) => {
    const currentSkills = formData.skills || [];
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter((s) => s !== skill)
      : [...currentSkills, skill];
    onChange("skills", updatedSkills);
  };

  const skills = [
    "Public Speaking",
    "Coding",
    "Design",
    "Event Planning",
    "Marketing",
    "Research",
    "Writing",
    "Leadership",
  ];

  return (
    <div className="w-full rounded-b-xl flex flex-col px-8 pt-8">
      <Section
        number={3}
        title="Skills & Interests"
        className={"w-52"}
      />

      <div className="flex flex-row items-center gap-2">
        <span className="text-text text-xs font-medium mb-0.5">
          Core Skills
        </span>
        <span className="text-placeholder text-[10px] font-medium">
          --- Check all that apply
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <label
            key={skill}
            className="text-xs rounded-md border border-placeholder bg-input w-32 h-9 p-2 text-text font-medium flex items-center gap-1 hover:bg-accent has-checked:bg-checked has-checked:text-title accent-secondary cursor-pointer"
          >
            <input
              type="checkbox"
              checked={formData.skills?.includes(skill) || false}
              onChange={() => toggleSkill(skill)}
            />
            {skill}
          </label>
        ))}
      </div>

      <div className="flex flex-row items-start justify-between">
        {/* Left */}
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-text text-xs font-medium">
            Other Skills
          </label>
          <Input
            name="otherSkills"
            id="otherSkills"
            placeholder="e.g. Video Editing..."
            className="w-60"
            onChange={(e) => onChange("otherSkills", e.target.value)}
            value={formData.otherSkills}
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex flex-row gap-1">
            <label
              htmlFor="primaryInterest"
              className="text-text text-xs font-medium"
            >
              Primary Interest
            </label>
            <span className="text-red-500 text-xs font-medium mr-1">
              *
            </span>
          </div>

          <div>
            <Dropdown
              name="primaryInterest"
              id="primaryInterest"
              value={formData.primaryInterest}
              onChange={(e) =>
                onChange("primaryInterest", e.target.value)
              }
              options={[
                "Marketing",
                "Design",
                "Development",
                "Community & Events",
              ]}
            />
            {errors.primaryInterest && (
              <ErrorText message={errors.primaryInterest} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
