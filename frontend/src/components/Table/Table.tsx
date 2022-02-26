import React, { ReactElement } from 'react';
import uniqueId from 'lodash/uniqueId';
import { toJS } from 'mobx';

import { ReactComponent as EditIcon } from './icons/edit.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';
import classes from './Table.module.scss';

type TableProps<T> = {
  // Names of columns th with class by necessary
  tableHeaders: Array<{ name?: string, class?: string }>;
  // Main object kind of store array which we ,aps in table body
  tableBody: Array<T>;
  // Pass true if wanna add edit column
  edit?: boolean;
  // Handle of edit (if edit is true)
  handleOfEdit?: (id: string) => void;
  // Pass true if wanna add delete column
  remove?: boolean;
  // Handle of remove (if remove is true)
  handleOfRemove?: (id: string, fullName: string) => void;
   // Optiomal condition for delete
  conditionForDelete: (value: any) => boolean;
  // Expression instead of DeleteIcon
  expressionInsteadOfDelete?: React.ReactNode;
}

const Table = <T extends object>(props: TableProps<T>) => {

  const {
    tableHeaders,
    tableBody,
    handleOfEdit,
    edit = false,
    remove = false,
    conditionForDelete,
    handleOfRemove,
    expressionInsteadOfDelete,
  } = props;

  const privateData = [
    'id',
    'login',
    'password',
    'status',
    'dateOfBirst',
    'sex',
    'placeOfBirth',
    'seriesAndNumbers'] as const;

  type PrivateData = (typeof privateData)[number];

  const isPrivateData = (value: any): value is PrivateData => privateData.includes(value);

  const entityKeys = Object.keys(toJS(tableBody)[0]).filter((key: string) => !isPrivateData(key));

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {
            tableHeaders.map((header, index) => (
              <th key={uniqueId(`th_${index}`)} className={header.class ? `${classes[header.class]}` : 'th'}>
                {header.name}
              </th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {toJS(tableBody).map((entity: any, index: number) => (
          <tr key={uniqueId(`entity_${index}`)}>
            { edit && handleOfEdit ?
              (
                <td className={classes.edit}>
                  {<EditIcon className={classes.editIcon} onClick={() => handleOfEdit(entity.id)} />}
                </td>
              ) : null }
            { entityKeys ?
              entityKeys.map((key) => (
                <td key={uniqueId(`entity_${index}`)} className={`classes.${key}`}>
                  {entity[key]}
                </td>
              )) :
              <td>Полей нет сорян</td>
            }
            {
              remove && handleOfRemove ?
                (
                  <td className={classes.delete}>
                    { conditionForDelete(entity) === true ?
                      (
                        <DeleteIcon
                          className={classes.deleteIcon}
                          onClick={() => handleOfRemove(entity.id, entity.fullName)}
                        />
                      ) : expressionInsteadOfDelete
                    }
                  </td>
                ) : null
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
