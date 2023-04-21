import { Formik } from 'formik';
import { Field, Form } from 'components/Form/Form.styled';

export const IdeaForm = () => {

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="inp" className="inp">
            <span className="label">Title</span>
            <Field type="text" name="title" className="input" />
          </label>
          <label htmlFor="inp" className="inp">
            <span className="label">Write down your idea...</span>
            <Field as="textarea" rows="10" name="title" className="input" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
