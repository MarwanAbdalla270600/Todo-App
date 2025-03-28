interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  reversed: boolean;
}

export default function FeatureCard({
  title,
  subtitle,
  description,
  imageUrl,
  reversed,
}: Props) {
  return (
    <article
      className={`flex flex-col md:flex-row w-full items-center gap-8 ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      <div className="flex md:w-1/2 flex-col gap-2">
        <span className="text-primary text-xl">{subtitle}</span>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-base-content text-2xl">{description}</p>
      </div>

      <figure className="md:w-1/2 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-auto object-contain  md:w-80"
          
        />
      </figure>
    </article>
  );
}
