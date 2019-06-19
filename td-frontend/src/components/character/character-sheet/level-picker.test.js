import React from 'react';
import { shallow } from 'enzyme';
import LevelPicker from "./level-picker";

describe(
  'Render', () => {
    it(
      'should render level picker', () => {
        const wrapper = shallow(<LevelPicker max={0} value={0} />);

        expect(wrapper.isEmptyRender()).toBeFalsy();
      }
    );

    it(
      'should render levels according its values', () => {
        const max = 5;
        const level = 3;
        const wrapper = shallow(<LevelPicker max={max} value={level} />);

        expect(wrapper.find({'data-qa-id': 'level-picker-level' })).toHaveLength(max);
        expect(wrapper.find({'data-qa': 'level-picker-level-yes' })).toHaveLength(level);
        expect(wrapper.find({'data-qa': 'level-picker-level-no' })).toHaveLength(max - level);
      }
    );

  }
);
