import { Formik } from 'formik';
import { Field, Form, Button } from 'components/Form/Form.styled';
import { Thumb } from 'components/Form/Thumb';
import { Component } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from 'components/api';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData(values) {
  await addDoc(collection(db, 'ideas'), {
    title: values.title,
    difficulty: values.difficulty,
    description: values.description,
    images: values.file.name,
  });
}

export class IdeaForm extends Component {
  render() {
    return (
<<<<<<< HEAD
      <GoogleReCaptchaProvider
        reCaptchaKey="6Ldd5cIlAAAAAEdDrK5vg8Zt-RRFFv2MlIJu5SPr"
        language="en"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
        container={{
          element: 'captcha',
          parameters: {
            badge: 'inline',
            theme: 'light',
          },
        }}
      >
        <ScrollComponent>
          <Formik
            initialValues={{
              title: '',
              difficulty: 'easy',
              description: '',
              file: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              addData(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form>
                <Label htmlFor="inp">
                  <FormTitle>Title</FormTitle>
                  <Field type="text" name="title" validate={validateRequired} />
                </Label>

                <Label htmlFor="description">
                  <FormTitle>Write down your idea...</FormTitle>
                  <Field
                    as="textarea"
                    rows="10"
                    maxlength="10000"
                    name="description"
                    validate={validateRequired}
                    onChange={event => {
                      setFieldValue('description', event.currentTarget.value);
                    }}
                  />
                </Label>

                <Label htmlFor="inp">
                  <FormTitle>Difficulty</FormTitle>
                  <Field
                    as="select"
                    name="difficulty"
                    onChange={event => {
                      setFieldValue('difficulty', event.currentTarget.value);
                    }}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Field>
                </Label>

                <Label htmlFor="images">Images</Label>
                <FilesGroup>
                  <input
                    id="images"
                    name="images"
                    type="file"
                    multiple="multiple"
                    onChange={event => {
                      setFieldValue('file', event.currentTarget.files[0]);
                    }}
                    accept="image/png, image/jpeg"
                  />
                  <Thumb file={values.file} />
                </FilesGroup>

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                
              </Form>
            )}
          </Formik>
        </ScrollComponent>
      </GoogleReCaptchaProvider>
=======
      <Formik
        initialValues={{
          title: '',
          difficulty: 'easy',
          description: '',
          images: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          addData(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <label htmlFor="inp" className="inp">
              <span className="label">Title</span>
              <Field type="text" name="title" className="input" />
            </label>

            <label htmlFor="description" className="inp">
              <span className="label">Write down your idea...</span>
              <Field
                as="textarea"
                rows="10"
                maxlength="10000"
                name="description"
                className="input"
                onChange={event => {
                  setFieldValue('description', event.currentTarget.value);
                }}
              />
            </label>

            <label htmlFor="inp">
              <span className="label">Difficulty</span>
              <Field
                as="select"
                name="difficulty"
                className="input difficulty"
                onChange={event => {
                  setFieldValue('difficulty', event.currentTarget.value);
                }}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Field>
            </label>

            <div className="form-group">
              <label htmlFor="images" className="inp label">
                Images
              </label>

              <input
                id="images"
                name="images"
                type="file"
                multiple="multiple"
                onChange={event => {
                  setFieldValue('file', event.currentTarget.files[0]);
                }}
                className="form-control"
              />
              <Thumb file={values.file} />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
>>>>>>> parent of 2b5b260 (form)
    );
  }
}
