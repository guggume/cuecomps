import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { Text } from 'cuecomps';

storiesOf('Button', module)
  .add('with text', () => (
    <Text>Text is shiz</Text>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));