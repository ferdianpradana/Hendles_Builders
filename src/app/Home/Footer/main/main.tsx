export default function Main() {
  return (
    <>
      <main className="min-w-1/2">
        <div>
          <h1 className="font-extrabold font-PublicSans text-yellow-900">
            Hendles Builders
          </h1>
        </div>
        <div  className="md:flex md:gap-x-10">
          <div>
            <h3 className="md:pt-0 font-black font-PublicSans mb-2 text-3xl text-start text-yellow-900 leading-[1.2] md:leading-normal">
              Fort Leburg
            </h3>
            <p>123 Anywhere St.</p>
            <p>Any City, ST 12345</p>
            <p>(Pwd parking avaible)</p>
            <p> Tel. (123)356-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
          </div>
          <div>
            <h3 className="md:pt-0 font-black font-PublicSans mb-2 text-3xl text-start text-yellow-900 leading-[1.2] md:leading-normal">
              Office hours
            </h3>
            <p>Monday to Friday</p>
            <p>9:00 am to 5:00 pm</p>
            <p>Weekends by appointment</p>
          </div>
        </div>
      </main>
    </>
  );
}
