export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
};

function query(entityType, delay = 0) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
  // return Promise.resolve(entities);
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity.id === entityId)
  );
}

function post(entityType, newEntity) {
  newEntity.id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function postMany(entityType, newEntities) {
  return query(entityType).then((entities) => {
    entities.push(...newEntities);
    _save(entityType, entities);
    return entities;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

async function remove(entityType, entityId) {
  const jobs = await query(entityType);
  const idx = jobs.findIndex((entity) => entity.id === entityId);
  if (idx === -1)
    return Promise.reject(`Unknown Entity ${entityType} with Id: ${entityId}`);
  jobs.splice(idx, 1);
  _save(entityType, jobs);
  return jobs;
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
