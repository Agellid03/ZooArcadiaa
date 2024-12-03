import React from 'react';
import BigTitle from '../components/BigTitle';

const Home = () => {
    return (
        <div className="section">
        <BigTitle
          title="Le Zoo d’Arcadia, un lieu préservé pour s'emmerveiller"
          subtitle="Nos Habitats"
          imageUrl="./images/Savane.jpeg"
          showButton={true}
        />
      </div>
    );
};

export default Home;
