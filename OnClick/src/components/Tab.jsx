import React, { useState } from 'react';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState('1');

//    this line of code sets up a state variable named currentTab with an initial value of '1', 
// and provides a method setCurrentTab to update this state. and it can let user know what is the current tab when 
// them interact with each pages. and we can give use setCurrenTab to give the tab specific variable.

  const tabs = [
    {
      id: 1,
      tabTitle: 'Tab 1',
      title: 'Title 1',
      content: 'this is the content for Tab 1'
    },
    {
      id: 2,
      tabTitle: 'Tab 2',
      title: 'Title 2',
      content: 'this is the content for Tab 2'
    },
    {
      id: 3,
      tabTitle: 'Tab 3',
      title: 'Title 3',
      content: 'this is the content for Tab 3'
    },
    {
      id: 4,
      tabTitle: 'Tab 4',
      title: 'Title 4',
      content: 'this is the content for Tab 4'
    }
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className='tabcontainer'>
      <div className='tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={() => handleTabClick(`${tab.id}`)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>

      {/* //Provides a unique key for each button, 
      which is required by React for efficiently rendering lists of elements.  */}
      {/* The purpose of disabling the currently active tab's button is to provide a visual effect 
      to the user about which tab is currently being viewed and to prevent unnecessary re-rendering 
      or processing if the user clicks on the tab that is already displayed.  */}

      <div className='content'>
        {tabs.map((tab) => (
          <div key={tab.id}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className='title'>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
