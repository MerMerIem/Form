import Section from "./ui/Section";
import Dropdown from "./ui/Dropdown";
import Textarea from "./ui/Textarea";

function Motivation({ onChange, formData, errors }) {

  return (
    <div className="w-full rounded-b-xl flex flex-col px-8 pt-8">
      <Section
        number={4}
        title="Motivation & Vision"
        className={"w-66"}
      />

      <Textarea
        value={formData.goal}
        onChange={(e) => onChange("goal", e.target.value)}
        title="Why us ?"
        placeholder="Why are you interested in joining our syndicate? What do you hope to gain from being part of our community?"
      />

      <Textarea
        value={formData.objective}
        onChange={(e) => onChange("objective", e.target.value)}
        className={"mt-3"}
        title="Your Objective"
        placeholder="What are your goals and aspirations within our syndicate?"
      />

      <div className="flex flex-col mt-3">
        <span className="text-text text-[12px] font-medium mb-2">
          How did you hear about us ?
        </span>
        <Dropdown
          value={formData.heardFrom}
          onChange={(e) => onChange("heardFrom", e.target.value)}
          className="w-full"
          options={[
            "Social Media",
            "A friend or colleague",
            "Events",
            "Other",
          ]}
        />
      </div>
    </div>
  );
}

export default Motivation;
