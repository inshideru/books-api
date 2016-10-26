describe('Routes Books', () => {
  const Books = app.datasource.models.Books;
  const defaultBook = {
    id: 1,
    name: 'Default Book',
  };

  beforeEach((done) => {
    Books
            .destroy({ where: {} })
            .then(() => Books.create(defaultBook))
            .then(() => {
              done();
            });
  });

  describe('Route GET /books', () => {
    it('should return a list of books', (done) => {
      request
                .get('/books')
                .end((err, res) => {
                  expect(res.body[0].id).to.equal(defaultBook.id);
                  expect(res.body[0].name).to.equal(defaultBook.name);
                  done(err);
                });
    });
  });

  describe('Route GET /books/{id}', () => {
    it('should return a single book', (done) => {
      request
                .get('/books/1')
                .end((err, res) => {
                  expect(res.body.id).to.equal(defaultBook.id);
                  expect(res.body.name).to.equal(defaultBook.name);
                  done(err);
                });
    });
  });

  describe('Route POST /books', () => {
    it('should create a single book', (done) => {
      const newBook = {
        id: 2,
        name: 'newBook',
      };

      request
                .post('/books')
                .send(newBook)
                .end((err, res) => {
                  expect(res.body.id).to.equal(newBook.id);
                  expect(res.body.name).to.equal(newBook.name);
                  done(err);
                });
    });
  });

  describe('Route PUT /books/{id}', () => {
    it('should update a single book', (done) => {
      const updatedBook = {
        id: 1,
        name: 'updatedBook',
      };

      request
                .put('/books/1')
                .send(updatedBook)
                .end((err, res) => {
                  expect(res.body).to.deep.equal([1]);
                  done(err);
                });
    });
  });

  describe('Route DELETE /books/{id}', () => {
    it('should delete a single book', (done) => {
      request
                .delete('/books/1')
                .expect(204)
                .end((err, res) => {
                  expect(res.body).to.deep.equal({});
                  done(err);
                });
    });
  });
});
