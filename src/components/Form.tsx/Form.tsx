import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, FormikValues } from 'formik';
import { CardType } from '../Card/Card';
import { Button } from '../Button/Button';
import './form.scss';

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required(),
  username: Yup.string().required(),
  website: Yup.string().required(),
  phone: Yup.string().required(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  zipcode: Yup.string().required(),
  email: Yup.string()
    .email()
    .required('Required'),
});

export type FormProfileType = {
  card: CardType;
  readOnly: boolean;
}

export const FormProfile: React.FC<FormProfileType> = ({
  card,
  readOnly,
}) => {

  const initialValues = {
    id: card.id || '',
    name: card.name || '',
    city: card.address?.city || '',
    street: card.address?.street || '',
    zipcode: card.address?.zipcode || '',
    website: card.website || '',
    username: card.username || '',
    phone: card.phone || '',
    email: card.email || '',
    comment: '',
  }

  const onSubmit = (values: FormikValues) => {
    console.log(JSON.stringify(values, null, 2));
  }

  return(
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={ProfileSchema}
      validateOnBlur={true}
      onSubmit={(values) => {
          onSubmit(values);
      }}
    >
      {({ touched, errors, isValid }) => {
        return (
          <Form className='form'>
            <div className="form__fields">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                readOnly={readOnly}
                className={errors.name && touched.name ? 'input--error' : ''}
              />

              <label htmlFor="username">User name</label>
              <Field
                id="username"
                name="username"
                readOnly={readOnly}
                className={errors.username && touched.username ? 'input--error' : ''}
              />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                readOnly={readOnly}
                className={errors.email && touched.email ? 'input--error' : ''}
              />

              <label htmlFor="street">Street</label>
              <Field
                id='street'
                name='street'
                readOnly={readOnly}
                className={errors.street && touched.street ? 'input--error' : ''}
              />

              <label htmlFor="city">City</label>
              <Field
                id="city"
                name="city"
                readOnly={readOnly}
                className={errors.city && touched.city ? 'input--error' : ''}
              />

              <label htmlFor="zipcode">Zip code</label>
              <Field
                id="zipcode"
                name="zipcode"
                readOnly={readOnly}
                className={errors.zipcode && touched.zipcode ? 'input--error' : ''}
              />

              <label htmlFor="phone">Phone</label>
              <Field
                id="phone"
                name="phone"
                type="phone"
                readOnly={readOnly}
                className={errors.phone && touched.phone ? 'input--error' : ''}
              />

              <label htmlFor="website">Website</label>
              <Field
                id="website"
                name="website"
                type="website"
                readOnly={readOnly}
                className={errors.website && touched.website ? 'input--error' : ''}
              />

              <label htmlFor="comment">Comment</label>
              <Field
                id="comment"
                name="comment"
                type="textarea"
                component='textarea'
              />
            </div>
            <Button
              context='Отправить'
              color={isValid ? 'active' : 'disable'}
              type='submit'
              disabled={!isValid}
            />
          </Form>
        )}}
    </Formik>
  )
}
