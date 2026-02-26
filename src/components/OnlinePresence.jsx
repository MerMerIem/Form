import ErrorText from "./ui/ErrorText";
import Section from "./ui/Section";
import Input from "./ui/Input";

function OnlinePresence({ onChange, errors, formData }) {
  return (
    <div className="w-full rounded-b-xl flex flex-col px-8 pt-8">
      <Section
        number={2}
        title="Online Presence"
        className={"w-52"}
      />

      <div className="w-full flex flex-row justify-between mt-2">
        <div>
          <Input
            label="Email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className={"w-48"}
            type={"email"}
            onChange={(e) => onChange("email", e.target.value)}
            value={formData.email}
          />
          {errors.email && <ErrorText message={errors.email} />}
        </div>

        <div>
          <Input
            label="Phone"
            name="phone"
            id="phone"
            placeholder="Your phone number"
            className={"w-48"}
            type={"tel"}
            onChange={(e) => onChange("phone", e.target.value)}
            value={formData.phone}
          />
          {errors.phone && <ErrorText message={errors.phone} />}
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <span className="text-text text-[10px] font-normal">
          Add what you have
        </span>

        <div className="flex flex-row mt-2 items-center gap-1">
          <label
            htmlFor="discord"
            className="text-text text-xs w-20 mr-2"
          >
            Discord
          </label>
          <input
            type="text"
            name="discord"
            id="discord"
            placeholder="Username#1234"
            className="text-[10px] rounded-md border border-placeholder bg-input w-full h-8 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
            onChange={(e) => onChange("discord", e.target.value)}
            value={formData.discord}
          />
        </div>

        <div className="flex flex-row mt-2 items-center gap-1">
          <label
            htmlFor="instagram"
            className="text-text text-xs w-20 mr-2"
          >
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            placeholder="@handle"
            className="text-[10px] rounded-md border border-placeholder bg-input w-full h-8 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
            onChange={(e) => onChange("instagram", e.target.value)}
            value={formData.instagram}
          />
        </div>

        <div className="flex flex-row mt-2 items-center gap-1">
          <label
            htmlFor="linkedin"
            className="text-text text-xs w-20 mr-2"
          >
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="linkedin.com/in/yourprofile"
            className="text-[10px] rounded-md border border-placeholder bg-input w-full h-8 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
            onChange={(e) => onChange("linkedin", e.target.value)}
            value={formData.linkedin}
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <label
          htmlFor="fullName"
          className="text-text font-medium text-xs mb-1"
        >
          Portfolio ( Optional )
        </label>
        <input
          type="text"
          name="portfolio"
          id="portfolio"
          placeholder="Your portfolio link"
          className="text-[10px] rounded-md border border-placeholder bg-input w-full h-8 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
          onChange={(e) => onChange("portfolio", e.target.value)}
          value={formData.portfolio}
        />
      </div>

      <div className="flex flex-col mt-2">
        <label
          htmlFor="fullName"
          className="text-text font-medium text-xs mb-1"
        >
          Github ( Optional )
        </label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="Your github link"
          className="text-[10px] rounded-md border border-placeholder bg-input w-full h-8 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
          onChange={(e) => onChange("github", e.target.value)}
          value={formData.github}
        />
      </div>
    </div>
  );
}

export default OnlinePresence;
