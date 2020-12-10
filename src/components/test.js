

// bookGenres: [];
// selectedCategories: [];
// categories:[
//   {
//     label: 'Action ',
//     value: 'Action ',
//   },
//   {
//     label: 'Adventure',
//     value: 'Adventure',
//   },
//   {
//     label: 'Classics',
//     value: 'Classics',
//   },
//   {
//     label: 'Comic Book',
//     value: 'Comic Book',
//   },
//   {
//     label: 'Novel',
//     value: 'Novel',
//   },
//   {
//     label: 'Graphic Novel',
//     value: 'Graphic Novel',
//   },
//   {
//     label: 'Detective and Mystery',
//     value: 'Detective and Mystery',
//   },
//   {
//     label: 'Fantasy',
//     value: 'Fantasy',
//   },
//   {
//     label: 'Historical Fiction',
//     value: 'Historical Fiction',
//   },
//   {
//     label: 'Horror',
//     value: 'Horror',
//   },
//   {
//     label: 'Literary Fiction',
//     value: 'Literary Fiction',
//   },
//   {
//     label: 'Literary',
//     value: 'Literary',
//   },
//   {
//     label: 'Fiction',
//     value: 'Fiction',
//   },
//   {
//     label: 'Romance',
//     value: 'Romance',
//   },
//   {
//     label: 'Science Fiction (Sci-Fi)',
//     value: 'Science Fiction (Sci-Fi)',
//   },
//   {
//     label: 'Short Stories',
//     value: 'Short Stories',
//   },

//   {
//     label: 'Suspense',
//     value: 'Suspense',
//   },
//   {
//     label: 'Thriller',
//     value: 'Thriller',
//   },
//   {
//     label: "Women's Fiction",
//     value: "Women's Fiction",
//   },
//   {
//     label: 'Biographies',
//     value: 'Biographies',
//   },
//   {
//     label: 'Autobiographies',
//     value: 'Autobiographies',
//   },
//   {
//     label: 'Cookbooks',
//     value: 'Cookbooks',
//   },
//   {
//     label: 'Essays',
//     value: 'Essays',
//   },

//   {
//     label: 'History',
//     value: 'History',
//   },
//   {
//     label: 'Memoir',
//     value: 'Memoir',
//   },
//   {
//     label: 'Poetry',
//     value: 'Poetry',
//   },
//   {
//     label: 'Self-Help',
//     value: 'Self-Help',
//   },
//   {
//     label: 'True Crime',
//     value: 'True Crime',
//   },
// ],




// newBookHandler = (e) => {
//     e.preventDefault();
//     if (this.handleValidation()) {
//       this.props.finished(true);
//       this.props.creating(false);
//       this.props.newBook(this.state.fields['title']);
//       let newBook = { ...this.state.fields };


//       newBook.categories = [...this.state.bookGenres];
//       axios.post(
//         'https://movie-library-7e5ec.firebaseio.com/books.json',
//         newBook
//       );
//     }
//   };





// <div className="form-group">
//           <label htmlFor="categories">Book Genres</label>
//           <MultiSelect
//             options={this.state.categories}
//             value={this.state.selectedCategories}
//             onChange={(selectedCategory) =>
//               this.setState(
//                 {
//                   selectedCategories: selectedCategory,
//                 },
//                 () => {
//                   let newCategories = [];
//                   for (
//                     let i = 0;
//                     i < this.state.selectedCategories.length;
//                     i++
//                   ) {
//                     let exists = this.state.bookGenres.includes(
//                       this.state.selectedCategories[i].label
//                     );
//                     if (!exists) {
//                       this.setState((prevState) => ({
//                         bookGenres: [
//                           ...prevState.bookGenres,
//                           this.state.selectedCategories[i].label,
//                         ],
//                       }));
//                     }
//                   }
//                 }
//               )
//             }
//             labelledBy={'Select'}
//             hasSelectAll={false}
//           />
//           <span style={{ color: 'red' }}>
//             {this.state.errors['categories']}
//           </span>
//         </div>





// <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><FontAwesomeIcon icon={faEdit} className="mr-2" /></button>

// <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">New message</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         <form>
//           <div className="form-group">
//             <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
//             <input type="text" className="form-control" id="recipient-name"/>
//           </div>
//         </form>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Send message</button>
//       </div>
//     </div>
//   </div>
// </div>