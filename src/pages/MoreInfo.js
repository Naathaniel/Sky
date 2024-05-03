import React, { useState, useEffect } from 'react';
import './Pages.css';

export default function MasterDetail() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const options = {
    'Marketing Tools': [
      { 
        label: 'Demo Room', 
        images: ['./images/moreinfo/1.png'], 
        mobileImages: ['./images/mobile/1.png'], 
      },
      { 
        label: 'Local SEO', 
        images: ['./images/moreinfo/2.png', './images/moreinfo/3.png'], 
        mobileImages: ['./images/mobile/2.png', './images/mobile/3.png'], 
      },
      { 
        label: 'Link Building', 
        images: ['./images/moreinfo/4.png'], 
        mobileImages: ['./images/mobile/4.png'], 
      },
      { 
        label: 'Importance of Right Words', 
        images: ['./images/moreinfo/5.png', './images/moreinfo/6.png'], 
        mobileImages: ['./images/mobile/5.png', './images/mobile/6.png'], 
      },
      { 
        label: 'Right infrastructure', 
        images: ['./images/moreinfo/7.png', './images/moreinfo/8.png'], 
        mobileImages: ['./images/mobile/7.png', './images/mobile/8.png'], 
      },
      { 
        label: 'Email', 
        images: ['./images/moreinfo/9.png'], 
        mobileImages: ['./images/mobile/9.png'], 
      },
      { 
        label: 'Lead generating directory', 
        images: ['./images/moreinfo/10.png', './images/moreinfo/11.png'], 
        mobileImages: ['./images/mobile/10.png', './images/mobile/11.png'], 
      }
    ],
    'Social Media Management': [
      { 
        label: 'The Importance of Social Media', 
        images: ['./images/moreinfo/12.png'], 
        mobileImages: ['./images/mobile/12.png'], 
      },
      { 
        label: 'What the numbers say', 
        images: ['./images/moreinfo/13.png'], 
        mobileImages: ['./images/mobile/13.png'], 
      },
      { 
        label: 'Steps in Social Media Strategy', 
        images: ['./images/moreinfo/14.png'], 
        mobileImages: ['./images/mobile/14.png'], 
      },
      { 
        label: 'Challenges', 
        images: ['./images/moreinfo/15.png'], 
        mobileImages: ['./images/mobile/15.png'], 
      },
    ],
    'Project Management Application Software': [
      { 
        label: 'Real-time visibility of project', 
        images: ['./images/moreinfo/16.png'], 
        mobileImages: ['./images/mobile/16.png'], 
      },
      { 
        label: 'Invoice Management', 
        images: ['./images/moreinfo/17.png'], 
        mobileImages: ['./images/mobile/17.png'], 
      },
      { 
        label: 'Design Coordination ', 
        images: ['./images/moreinfo/18.png'], 
        mobileImages: ['./images/mobile/18.png'], 
      },
      { 
        label: 'Project Financial', 
        images: ['./images/moreinfo/19.png'], 
        mobileImages: ['./images/mobile/19.png'], 
      },
    ],
  };

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectOption = (category, option) => {
    setSelectedCategory(category);
    setSelectedOption(option);
    setCurrentImageIndex(0);
    setShowMenu(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex + 1); 
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex - 1);
  };

  const currentOption = options[selectedCategory]?.find(opt => opt.label === selectedOption);

  const currentImage = currentOption?.images[currentImageIndex];
  const mobileImage = currentOption?.mobileImages[currentImageIndex];

  return (
    <div className="master-detail">
      <h4 className='text-center p-5 md-htre'><strong>ClearSky</strong> Special Unique One Time Only Offer (first 100 signups)</h4>
      <div className="master-detail-container">
        <div className="hamburger-menu">
          <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            <div className='m3line'>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          </div>
          {showMenu && (
            <div className="menu-categories">
              {Object.entries(options).map(([category, categoryOptions]) => (
                <div className="menu-group" key={category}>
                  <h4 className="menu-title">{category}</h4>
                  {categoryOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`menu-option ${selectedOption === option.label ? 'selected' : ''}`}
                      onClick={() => selectOption(category, option.label)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`master-section ${showMenu ? 'hidden' : ''}`}>
          <div className='master-one'>
            <h4 className='enhan'>Enhanced Modules </h4>
            {Object.entries(options).map(([category, categoryOptions]) => (
              <div className="option-group" key={category}>
                <h4 className="option-title">{category}</h4>
                {categoryOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`option ${selectedOption === option.label ? 'selected' : ''}`}
                    onClick={() => selectOption(category, option.label)}
                  >
                    <div className="option-label">
                      {option.label}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section1">
          <div className='detplan'>
            <h4 className='detail'>Details:</h4>
          </div>
          <div className="detail-section">
            {selectedOption ? (
              <div className="selected-option-details">
                <h3 className='optiontitle'>{selectedOption}</h3>
                <div className="selected-option-images">
                  <img src={screenSize <= 860 ? mobileImage : currentImage} alt="Option Image" className="selected-option-image" />
                  {currentOption?.images.length > 1 && (
                    <div>
                      <button onClick={handlePreviousImage} disabled={currentImageIndex === 0}>Previous</button> {}
                      <button onClick={handleNextImage} disabled={currentImageIndex === currentOption.images.length - 1}>Next</button> {}
                    </div>
                  )}
                </div>
                <p>{currentOption?.content}</p>
              </div>
            ) : (
              <p>{selectedCategory ? 'Select an option' : 'Select a category and option'}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
