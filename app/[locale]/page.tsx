interface HomePageProps {
     params: Promise<{ locale: string }>;
}

const HomePage = async ({ params }: HomePageProps) => {
     const { locale } = await params;
     return (
          <div>
               <h1>Welcome to the Home Page</h1>
          </div>
     );
};

export default HomePage;
