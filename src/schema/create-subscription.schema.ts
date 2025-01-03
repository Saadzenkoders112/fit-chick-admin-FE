import * as yup from 'yup';

export const subscriptionSchema = yup.object().shape({
  name: yup.string().required('Subscription name is required'),
  price: yup
    .number()
    .min(1, 'Price must be minimum 1 dollar')
    .required('Price is required'),
  description: yup.string().required('Description is required'),
  features: yup
    .array()
    .of(yup.string().required('Feature is required'))
    .min(1, 'At least one feature is required'),
});
