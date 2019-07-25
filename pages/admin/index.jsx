import { Formik, Form, Field, ErrorMessage } from "formik";
import {Button} from "components/styled/Button";
import { AdminLayout } from "layouts";
import {H1} from "components/styled/Text"

const AddProduct = () => {
  const validate = (values) => {
    let errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <AdminLayout>
      <H1> Admin Profile</H1>
      <Formik
        initialValues={{ title: "", description: "", price: 0.0 }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" />
            </div>
            <div>
              <Button type="submit" active={true} disabled={isSubmitting}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AdminLayout>
  );
};

export default AddProduct;
