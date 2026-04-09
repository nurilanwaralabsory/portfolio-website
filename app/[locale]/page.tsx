interface HomePageProps {
     params: { locale: string };
}

const HomePage = async ({ params: { locale } }: HomePageProps) => {
     return (
          <div>
               <h1>Welcome to the Home Page</h1>
          </div>
     );
};

export default HomePage;
