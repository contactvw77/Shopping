//Client Component
'use client';

import React from 'react';
import styled from 'styled-components';
import { $Button, TsmUi } from '@tsmicrosystems/tsm-ui';
import { sendAction } from './actions';

const StyledPage = styled.div`
  .page {
  }
`;

const PostsList: React.FC = () => {
  return (
    <StyledPage>
      <div>
        <h1>Client Component</h1>
        <$Button label={'Custom Button'} color={'primary'} />
        <TsmUi />
      </div>

      <form action={sendAction}>
        <button>Send It</button>
      </form>
    </StyledPage>
  );
};

export default PostsList;
