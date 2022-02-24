import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import classes from './EditForm.module.scss';

type EditFormProps = {
  editableEntity: Array<object>;
  getterFromStore: (id: string) => object;
}

const EditForm: React.FC<EditFormProps> = (props: EditFormProps) => {

  const {
    editableEntity,
    // editType,
    getterFromStore,
  } = props;

  const { id = '' } = useParams();

  const navigate = useNavigate();

  const initialEntity = getterFromStore(id);

  const lol = Object.keys(initialEntity);

  console.log(lol);

  // const [form, setForm] = useState({

  // });

  return (
    <div className={classes.component}>
      <h1>sks</h1>
    </div>
  );
};

export default EditForm;
