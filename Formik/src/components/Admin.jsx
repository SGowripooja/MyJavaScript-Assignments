
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Admin.css";

function AdminDashboard() {
  const [books, setBooks] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);

  return (
    <div className="admin-dashboard">
      <div className="books-section">
        <h2>Books</h2>
        <Formik
          initialValues={{
            title: "",
            author: "",
            isbn: "",
            publicationDate: ""
          }}
          onSubmit={(values, { resetForm }) => {
            setBooks([...books, values]);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" placeholder="Title" required />
              <ErrorMessage name="title" component="div" />
              <Field type="text" name="author" placeholder="Author" required />
              <ErrorMessage name="author" component="div" />
              <Field type="text" name="isbn" placeholder="ISBN" required />
              <ErrorMessage name="isbn" component="div" />
              <Field type="date" name="publicationDate" required />
              <ErrorMessage name="publicationDate" component="div" />
              <button type="submit" disabled={isSubmitting}>Add Book</button>
            </Form>
          )}
        </Formik>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} - {book.author} - {book.isbn} - {book.publicationDate}
              <button onClick={() => setBooks(books.filter((_, i) => i !== index))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="authors-section">
        <h2>Authors</h2>
        <Formik
          initialValues={{
            name: "",
            birthDate: "",
            biography: ""
          }}
          onSubmit={(values, { resetForm }) => {
            setAuthors([...authors, values]);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Name" required />
              <ErrorMessage name="name" component="div" />
              <Field type="date" name="birthDate" required />
              <ErrorMessage name="birthDate" component="div" />
              <Field as="textarea" name="biography" placeholder="Biography" required />
              <ErrorMessage name="biography" component="div" />
              <button type="submit" disabled={isSubmitting}>Add Author</button>
            </Form>
          )}
        </Formik>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              {author.name} - {author.birthDate} - {author.biography}
              <button onClick={() => setAuthors(authors.filter((_, i) => i !== index))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
