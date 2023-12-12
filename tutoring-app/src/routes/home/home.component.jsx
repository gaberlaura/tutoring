import Directory from '../../directory/directory.component';

const Home = () =>{
  const categories = [
      {
        id: 1,
        title: 'Little Kids',
        imageUrl: '/little_kid.jpg'
      },
      {
        id: 2,
        title: 'Big Kids',
        imageUrl: "big_kid.jpg"
      }
  ];

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
