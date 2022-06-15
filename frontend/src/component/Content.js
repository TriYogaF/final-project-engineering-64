import Book from '../assets/book.png'
import Karya from '../assets/icon/book.png'
import Novel from '../assets/icon/literature.png'
import Doc from '../assets/icon/books.png'
import Buat from '../assets/icon/write.png'

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
      <div classNameName="container-fluid px-100 px-lg-5 mb-3" aria-label="content" style={{ backgroundColor: "#304D63" }} >
         <div className="row align-items-center col-lg-12 mb-4 pb-4 px-5">
            <div className="col-sm-8 text-center text-lg-left">
               <p className="display-4 font-weight-bold text-white">
                 Membaca memperkaya ilmuku dan memperluas imajinasiku.
               </p>
               <h4 className="text-white sm-2 mt-5 mt-lg-0 mb-3">Membaca Dimasa Saja</h4>
               <a href="/" className="btn btn-success mt-1 py-3 px-5">Get Started</a>
            </div>
            <div className="col-4 text-center text-sm-right ms-auto">
               <img style={size.md} src={Book} alt="" />
            </div>
         </div>
         <div className="row col-lg-12 card-body justify-content-center">
            <div className="col-2 text-center">
               <div href="#karya">
                  <a href="/"><img className="center" style={size.sm} src={Karya} alt="" /></a>
                  <div className="card-body">
                     <h4 className="card-title">Karya Ilmiah</h4>
                  </div>
               </div>
            </div>
            <div className="col-2 text-center">
               <div href="#novel">
                  <a href="/"><img className="center" style={size.sm} src={Novel} alt="" /></a>
                  <div className="card-body">
                     <h4 className="card-title">Novel</h4>
                  </div>
               </div>
            </div>
            <div className="col-2 text-center">
               <div href="#doc">
                  <a href="/"><img className="center" style={size.sm} src={Doc} alt="" /></a>
                  <div className="card-body">
                     <h4 className="card-title">Dokumen</h4>
                  </div>
               </div>
            </div>
            <div className="col-2 text-center">
               <div>
                  <a href="/"><img className="center" style={size.sm} src={Buat} alt="" /></a>
                  <div className="card-body">
                     <h4 className="card-title">Buat Karya</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}