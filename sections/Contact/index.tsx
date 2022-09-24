import { MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: any = handleSubmit((formData) => {
    window.location.href = `mailto:manavkaushal756@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  });

  return (
    <div className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly">
      <h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="underline decoration-primary/50">Lets Talk.</span>
        </h4>
        <div>
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 95012 06323</p>
          </div>
          <div className="flex items-center space-x-5">
            <MailIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">randommail</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">233 Developer Lane</p>
          </div>
        </div>
        <form
          className="flex flex-col mx-auto space-y-2 w-fit"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="px-10 py-5 text-lg font-bold text-black rounded-md bg-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
