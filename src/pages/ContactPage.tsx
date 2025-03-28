import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase"; // adjust path as needed
import InputField from "../components/shared/InputField";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await addDoc(collection(db, "messages"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    reset();
  };

  return (
    <section className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-6 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4 rounded-md p-8 pt-20"
      >
        <h1 className="text-center text-5xl font-semibold">Contact</h1>
        <h2 className="text-base-content text-center text-2xl">
          We're here for you: Connect with us for any questions or concerns
        </h2>
        <InputField
          {...register("name", { required: "Name is required" })}
          error={errors.name}
          placeholder="Enter your name"
          type="text"
        />

        <InputField
          {...register("email", { required: "Email is required" })}
          error={errors.name}
          placeholder="Enter your name"
          type="text"
        />

        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="textarea textarea-bordered w-full focus:outline-0"
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="btn btn-primary rounded-4xl py-6 text-xl text-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-center text-green-500">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
