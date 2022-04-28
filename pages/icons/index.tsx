/* eslint-disable @next/next/no-img-element */
interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  /** The module id of the context module. This may be useful for module.hot.accept. */
  id: string;
}
interface Images {
  [key: string]: {};
}

// List of icons from /public/icons/
export default function Icons() {
  function importAll(r: RequireContext) {
    let images = {}
    r.keys().map(item => { (images as any)[item.replace('./', '')] = r(item); })
    return images as Images
  }

  const images = importAll(require.context('../../public/icons', false, /\.svg/));

  return (
    <div className="w-screen flex flex-col items-center p-10">
      <h1 className="text-3xl">Icons</h1>
      <div className="grid grid-cols-12">
        {Object.keys(images).map(key => (
          <div key={key} className="flex flex-col items-center">
            <img src={`/icons/${key}`} alt={key} className="w-24 h-24" />
          </div>
        ))}
      </div>
      <p>Feel free to use these anywhere without credit</p>
    </div>
  )
}