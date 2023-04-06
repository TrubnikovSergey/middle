const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = async (url: string): Promise<Response> => {
  const respons: unknown = await fetch(url);

  return respons as Response;
};

getData(COMMENTS_URL)
  .then((resp) => resp.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const { id, email } = data[i];
      console.log(`ID: ${id}, Email: ${email}`);
    }
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
