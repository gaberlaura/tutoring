import Directory from '../../directory/directory.component';

const Home = () =>{
  const categories = [
      {
        id: 1,
        title: 'Little Kids Club',
        desc: '$25/Session (45min)',
        imageUrl: '/little_kid.jpg'
      },
      {
        id: 2,
        title: 'Big Kids Club',
        desc: '$35/Session (45min)',
        imageUrl: "big_kid.jpg"
      }
  ];

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
