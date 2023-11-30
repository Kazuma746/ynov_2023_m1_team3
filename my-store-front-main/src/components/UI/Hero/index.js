import Link from "next/link";

const Index = ({img, title, description, link, link_text}) => {
  return (
    <div className="relative h-screen bg-no-repeat	bg-size-cover"
    style={
      {
        backgroundImage:`linear-gradient(#0000001f, #00000012, #0000001a), url(${img})`
      }
    }
    >
      <div className="content absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="font-display text-white text-6xl mb-4">{title}</h1>
        <p className="text-white text-lg mb-8">{description}</p>
        <Link 
          className="bg-white text-gray-900 px-4 py-3 border border-white hover:bg-transparent hover:text-white hover:border-color-transparent transition ease-in-out delay-150" 
          href={link}>
          {link_text}
        </Link>
      </div>
    </div>
  );
}

export default Index;
