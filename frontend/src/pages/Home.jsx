import React from 'react';
import BigTitle from '../components/BigTitle';
import ServicesSection from '../components/ServicesSection';
import HabitatsSection from '../components/HabitatsSection';
import ReviewsSection from '../components/ReviewsSection';

const Home = () => {
    return (<>
        <div className="section">
        <BigTitle
          title="Le Zoo d’Arcadia, un lieu préservé pour s'emmerveiller"
          subtitle="Nos Habitats"
          imageUrl="./images/Savane.jpeg"
          showButton={true}
        />
      </div>
      <HabitatsSection/>
      <ServicesSection/>
      <ReviewsSection/>
      </>
      );
};

export default Home;
