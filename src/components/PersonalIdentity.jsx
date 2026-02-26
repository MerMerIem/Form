import ErrorText from "./ui/ErrorText";
import Section from "./ui/Section";
import Input from "./ui/Input";

function PersonalIdentity({ onChange, errors, formData }) {
  return (
    <div className="w-full rounded-b-xl flex flex-col px-8 pt-8">
      <Section
        number={1}
        title="Personal Identity"
        className={"w-52"}
      />

      <div className="w-full flex flex-row justify-between mt-2">
        <div>
          <Input
            required={true}
            label="Full Name"
            name="fullName"
            id="fullName"
            placeholder="Your full name"
            className={"w-60"}
            onChange={(e) => onChange("fullName", e.target.value)}
            value={formData.fullName}
          />
          {errors.fullName && <ErrorText message={errors.fullName} />}
        </div>

        <div>
          <Input
            required={true}
            label="Age"
            name="age"
            id="age"
            placeholder="Your age"
            className={"w-60"}
            onChange={(e) => onChange("age", e.target.value)}
            value={formData.age}
          />
          {errors.age && <ErrorText message={errors.age} />}
        </div>
      </div>

      <div className="w-full flex flex-row justify-between mt-2">
        <div>
          <Input
            required={true}
            label="Speciality"
            name="speciality"
            id="speciality"
            placeholder="Your speciality"
            className={"w-60"}
            onChange={(e) => onChange("speciality", e.target.value)}
            value={formData.speciality}
          />
          {errors.speciality && (
            <ErrorText message={errors.speciality} />
          )}
        </div>

        <div>
          <Input
            required={true}
            label="Level"
            name="level"
            id="level"
            placeholder="Your level"
            className={"w-60"}
            onChange={(e) => onChange("level", e.target.value)}
            value={formData.level}
          />
          {errors.level && <ErrorText message={errors.level} />}
        </div>
      </div>

      <div>
        <Input
          required={true}
          label="University"
          name="university"
          id="university"
          placeholder="Your university"
          className={"w-full mt-2"}
          onChange={(e) => onChange("university", e.target.value)}
          value={formData.university}
        />
        {errors.university && (
          <ErrorText message={errors.university} />
        )}
      </div>
    </div>
  );
}

export default PersonalIdentity;
