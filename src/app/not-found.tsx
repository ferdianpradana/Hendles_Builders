import Button from "../components/buttons/button";
export default function NotFound() {
  return (
    <>
      <div
        className="hero min-h-screen font-PublicSans"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-1 text-5xl font-bold bg-gradient-to-tl from-yellow-100 via-yellow-400 to-zinc-400 bg-clip-text text-transparent">
              ERROR <span className="text-9xl">404</span>
            </h1>
            <p className="text-yellow-100 text-5xl mb-5">Page not found</p>
            <p className="text-yellow-50 mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo magnam a amet illum consequuntur obcaecati quasi
              corrupti ex voluptatibus esse harum consectetur minima, placeat
              illo totam, dolorum et, fugit sit.
            </p>
              <Button title="Return to main page" link="/Home"/>
          </div>
        </div>
      </div>
    </>
  );
}
