import CustomError from 'custom-error-generator';
import isFunction from 'lodash/isFunction';
import isUndefined from 'lodash/isUndefined';

function makeError(name, parameters?: object, Constructor?: object | Function | undefined) {
  if (isUndefined(Constructor) && isFunction(parameters)) {
    Constructor = parameters;
    parameters = {};
  }

  return CustomError(name, parameters, Constructor);
}

export const DatabaseError = makeError('DatabaseError');
export const DependencyError = makeError('DependencyError');
export const ArgumentError = makeError('ArgumentError');
export const DatabaseDeleteError = makeError('DatabaseDeleteError', DatabaseError);
export const DatabaseNotFoundError = makeError('DatabaseNotFoundError', DatabaseError);
export const DatabaseUpdateError = makeError('DatabaseUpdateError', DatabaseError);
export const DatabaseUpdateRowError = makeError('DatabaseUpdateRowError', DatabaseError);
export const DatabaseDeleteRowError = makeError('DatabaseDeleteRowError', DatabaseError);
export const DatabaseTableDeductionError = makeError('DatabaseTableDeductionError', DatabaseError);

export const SQLDatabaseError = makeError('SQLDatabaseError', DatabaseError);
export const SQLQueryError = makeError('SQLQueryError', SQLDatabaseError);

export const TimeoutError = makeError('TimeoutError');
export const TimeoutDatabaseError = makeError('TimeoutDatabaseError', TimeoutError);

export const IllegalArgumentError = makeError('IllegalArgumentError');
