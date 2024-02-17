import React from 'react'
import { getImageUrl } from './utils.js';
// const practice = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// the name after function must be capital letter
// in react, it only allow return 1 single element but i have two, img and div. 
// So, i need to add parent element to make it functional use.
// function Avatar ({ person,size }) {
//     const name = 'Minglin';

//     return (
//         <div>
//         <h1>{name}'s to do list</h1>
//     <img
//     className="avatar"
//     src="https://i.imgur.com/1bX5QH6.jpg"
//     alt="avatar"
//     width={ 200 }
//     height={200}

//      />
//   </div>
//      );


// }

function Avatar ({ person,size }) {

    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        
        />
    )
}

export default function Profile() {
    return (
        <div>
          <Avatar
            size={100}
            person={{ 
              name: 'Katsuko Saruhashi', 
              imageId: 'YfeOqp2'
            }}
          />
          <Avatar
            size={80}
            person={{
              name: 'Aklilu Lemma', 
              imageId: 'OKS67lh'
            }}
          />
          <Avatar
            size={50}
            person={{ 
              name: 'Lin Lanying',
              imageId: '1bX5QH6'
            }}
          />
        </div>
      );
    }