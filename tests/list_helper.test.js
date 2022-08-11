const fakeBlogs = require('../utils/fake_blogs');
const { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes } = require('../utils/list_helper');

test('should return 1', () => {
  expect(dummy([])).toBe(1);
});

describe('total likes', () => {
  test('of empty list is 0', () => {
    expect(totalLikes([])).toBe(0);
  });

  test('of list with one object are equal to likes of it only', () => {
    expect(totalLikes([fakeBlogs[0]])).toBe(7);
  });

  test('of list with many objects are equal to the sum of their likes', () => {
    expect(totalLikes(fakeBlogs)).toBe(36);
  });
});

describe('blog with most likes', () => {
  test('of empty list is null', () => {
    expect(favoriteBlog([])).toBe(null);
  });

  test('of list with one object is the same object', () => {
    const blog = fakeBlogs[0];
    expect(favoriteBlog([blog])).toBe(blog);
  });

  test('of list with many objects returned properly', () => {
    expect(favoriteBlog(fakeBlogs)).toBe(fakeBlogs[2]);
  });
});

describe('author with most blogs', () => {
  test('of empty list', () => {
    let result = { author: '', blogs: 0 };
    expect(mostBlogs([])).toEqual(result);
  });

  test('of list with single object', () => {
    let result = { author: 'Michael Chan', blogs: 1 };
    expect(mostBlogs([fakeBlogs[0]])).toEqual(result);
  });

  test('of list with multiple objects', () => {
    let result = { author: 'Robert C. Martin', blogs: 3 };
    expect(mostBlogs(fakeBlogs)).toEqual(result);
  });
});

describe('author with most likes', () => {
  test('of empty list', () => {
    let result = { author: '', likes: 0 };
    expect(mostLikes([])).toEqual(result);
  });

  test('of list with single object', () => {
    let result = { author: 'Michael Chan', likes: 7 };
    expect(mostLikes([fakeBlogs[0]])).toEqual(result);
  });

  test('of list with multiple objects', () => {
    let result = { author: 'Edsger W. Dijkstra', likes: 17 };
    expect(mostLikes(fakeBlogs)).toEqual(result);
  });
});
