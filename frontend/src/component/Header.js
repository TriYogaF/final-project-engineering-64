
const size = {
   sm: {
      width: '5em',
      height: '5em',
   },
   md: {
      width: '20em',
      height: '20em',
   }
}

export default function Content() {
   return (
      <div className="container-fluid px-100 px-lg-5 mb-3" aria-label="content" style={{ backgroundColor: "#304D63" }} >
         <div className="row align-items-center col-lg-12 mb-4 pb-4 px-5">
            <div className="col-sm-8 text-center text-lg-left">
               <p className="display-5 font-weight-bold text-white">
                 Membaca memperkaya ilmuku dan memperluas imajinasiku.
               </p>
               <h4 className="text-white sm-2 mt-5 mt-lg-0 mb-3">Membaca Dimasa Saja</h4>
               <a href="/" className="btn btn-success mt-1 py-3 px-5">Get Started</a>
            </div>
            <div className="col-4 text-center text-sm-right ms-auto mb-5 mt-5">
               <img style={size.md} src="/assets/img/book.png" alt="Book" />
            </div>
            <div className="row text-center" style={{ backgroundColor: "#304D63" }}>
               <h5 className="text-white">Temukan buku terbaik dan bahan bacaan terbaik</h5>
               <p className="text-white">
                 Baca Semuanya dan Jadilah yang terbaik.
               </p>
            </div>
         </div>
      </div>
   )
}