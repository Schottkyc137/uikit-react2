import React from 'react';
import { Form } from './Form';
import { FieldSet } from './FieldSet';
import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './TextArea';
import { FormControl } from './FormControl';

export default {
  title: 'Form',
  component: Form,
};

export const Basic = () => (
  <Form>
    <FieldSet legend="Legend">
      <Input type="text" placeholder="placeholder" />
      <Select>
        <option>Option 1</option>
        <option>Option 2</option>
      </Select>
      <TextArea rows={5} placeholder="Textarea" />
      <div className="uk-grid-small uk-child-width-auto uk-grid">
        <label>
          <Input type="radio" name="radio2" checked /> A
        </label>
        <label>
          <Input type="radio" name="radio2" /> B
        </label>
      </div>
      <div className="uk-grid-small uk-child-width-auto uk-grid">
        <label>
          <Input type="checkbox" name="radio2" checked /> A
        </label>
        <label>
          <Input type="checkbox" name="radio2" /> B
        </label>
      </div>
      <Input type="range" value="2" min="0" max="10" step="0.1" />
    </FieldSet>
  </Form>
);

export const States = () => {
  return (
    <>
      <div className="uk-margin">
        <Input
          type="text"
          placeholder="form-danger"
          state="danger"
          value="form-danger"
        />
      </div>

      <div className="uk-margin">
        <Input
          type="text"
          placeholder="form-success"
          state="success"
          value="form-success"
        />
      </div>

      <div className="uk-margin">
        <Input type="text" placeholder="disabled" value="disabled" disabled />
      </div>
    </>
  );
};

export const Sizes = () => (
  <>
    <div className="uk-margin">
      <Input
        type="text"
        sizeModifier="small"
        placeholder="small"
        value="small"
      />
    </div>
    <div className="uk-margin">
      <Input type="text" placeholder="regular" value="regular" />
    </div>
    <div className="uk-margin">
      <Input
        type="text"
        sizeModifier="large"
        placeholder="large"
        value="large"
      />
    </div>
  </>
);

export const Widths = () => (
  <>
    <div className="uk-margin">
      <Input
        type="text"
        widthModifier="xsmall"
        placeholder="x-small"
        value="x-small"
      />
    </div>
    <div className="uk-margin">
      <Input
        type="text"
        widthModifier="small"
        placeholder="small"
        value="small"
      />
    </div>
    <div className="uk-margin">
      <Input
        type="text"
        widthModifier="medium"
        placeholder="medium"
        value="medium"
      />
    </div>
    <div className="uk-margin">
      <Input
        type="text"
        widthModifier="large"
        placeholder="large"
        value="large"
      />
    </div>
    <div className="uk-margin">
      <Input type="text" placeholder="standard" value="standard" />
    </div>
  </>
);

export const Blank = () => <Input type="text" value="blank" blank />;

export const StackedForm = () => (
  <Form layout="stacked">
    <FormControl label="Text" control={<Input value="Some Text..." />} />
    <FormControl
      label="Select"
      control={
        <Select>
          <option>Option 01</option>
          <option>Option 02</option>
        </Select>
      }
    />
    <FormControl
      label="Radio"
      control={
        <>
          <label>
            <Input type="radio" name="radio2" checked /> A
          </label>
          <label>
            <Input type="radio" name="radio2" /> B
          </label>
        </>
      }
    />
  </Form>
);

export const HorizontalForm = () => (
  <Form layout="horizontal">
    <FormControl label="Text" control={<Input value="Some Text..." />} />
    <FormControl
      label="Select"
      control={
        <Select>
          <option>Option 01</option>
          <option>Option 02</option>
        </Select>
      }
    />
    <FormControl
      label="Radio"
      control={
        <>
          <label>
            <Input type="radio" name="radio2" checked /> A
          </label>
          <label>
            <Input type="radio" name="radio2" /> B
          </label>
        </>
      }
    />
  </Form>
);
