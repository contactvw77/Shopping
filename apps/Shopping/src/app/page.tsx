import React from 'react';

// const Index = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <header>
//           <ul>
//             <li>Fresh</li>
//             <li>Today's Deals</li>
//             <li>Books</li>
//             <li>Amazon miniTV</li>
//             <li>Sell</li>
//             <li>Gift Cards</li>
//             <li>Gift Ideas</li>
//             <li>Amazon Pay</li>
//             <li>Buy Again</li>
//             <li>Amazon Business</li>
//             <li>Browsing History</li>
//           </ul>
//         </header>
//       </div>
//       <div className="content-container">Content Container</div>
//       <div className="footer">Footer</div>
//     </div>
//   );
// };

// export default Index;

// //Server Component
import PostsList from './posts.list';

export default async function Index() {
  console.log('Server Component');
  return <PostsList />;
}

//Client Component
// 'use client';

// import styled from 'styled-components';

// import { $Button, TsmUi } from '@tsmicrosystems/tsm-ui';

// const StyledPage = styled.div`
//   .page {
//   }
// `;

// export default function Index() {
/*
 * Replace the elements below with your own.
 *
 * Note: The corresponding styles are in the ./index.styled-components file.
 */
//   return (
//     <StyledPage>
//       <div className="wrapper">
//         <div className="container">
//           <div id="welcome">
//             <$Button label={'Custom Button'} color={'primary'} />
//             <TsmUi />
//             <h1>
//               <span> Hello there, </span>
//               Welcome Shopping 👋
//             </h1>
//           </div>
//         </div>
//       </div>
//     </StyledPage>
//   );
// }
