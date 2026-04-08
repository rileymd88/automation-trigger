const getFallbackFieldName = (index) => `Field ${index + 1}`;

const getNumericValue = (cell = {}) => {
  if (typeof cell.qNum === 'number' && Number.isFinite(cell.qNum)) {
    return cell.qNum;
  }

  if (typeof cell.qNum === 'string' && cell.qNum.trim() !== '') {
    const parsedValue = Number(cell.qNum);

    if (Number.isFinite(parsedValue)) {
      return parsedValue;
    }
  }

  return undefined;
};

const getTextValue = (cell = {}) => {
  if (typeof cell.qText === 'string') {
    return cell.qText;
  }

  return '';
};

const getUniqueFieldNames = (fieldNames, totalColumns) => {
  const counts = {};
  const uniqueFieldNames = [];

  for (let index = 0; index < totalColumns; index += 1) {
    const baseFieldName = fieldNames[index] || getFallbackFieldName(index);
    const nextCount = (counts[baseFieldName] || 0) + 1;

    counts[baseFieldName] = nextCount;
    uniqueFieldNames.push(nextCount === 1 ? baseFieldName : `${baseFieldName} (${nextCount})`);
  }

  return uniqueFieldNames;
};

const getFieldNames = (hypercube, totalColumns) => {
  const dimensionNames = (hypercube.qDimensionInfo || []).map((dimension, index) => (
    dimension.qFallbackTitle || `Dimension ${index + 1}`
  ));
  const measureNames = (hypercube.qMeasureInfo || []).map((measure, index) => (
    measure.qFallbackTitle || `Measure ${index + 1}`
  ));

  return getUniqueFieldNames([...dimensionNames, ...measureNames], totalColumns);
};

const getTotalColumns = (qDataPages) => qDataPages.reduce((maxColumns, page) => {
  const rows = page && Array.isArray(page.qMatrix) ? page.qMatrix : [];

  return rows.reduce((rowMaxColumns, row) => Math.max(rowMaxColumns, row.length), maxColumns);
}, 0);

const getPrimitiveCellValue = (cell, index, dimensionCount) => {
  const numericValue = getNumericValue(cell);

  if (index < dimensionCount) {
    const textValue = getTextValue(cell);

    if (textValue !== '') {
      return textValue;
    }

    if (typeof numericValue !== 'undefined') {
      return numericValue;
    }

    return '';
  }

  if (typeof numericValue !== 'undefined') {
    return numericValue;
  }

  return getTextValue(cell);
};

export const convertHypercubeToRecords = (hypercube = {}) => {
  const qDataPages = Array.isArray(hypercube.qDataPages) ? hypercube.qDataPages : [];
  const totalColumns = getTotalColumns(qDataPages);
  const fieldNames = getFieldNames(hypercube, totalColumns);
  const dimensionCount = Array.isArray(hypercube.qDimensionInfo) ? hypercube.qDimensionInfo.length : 0;

  return qDataPages.reduce((records, page) => {
    const rows = page && Array.isArray(page.qMatrix) ? page.qMatrix : [];

    rows.forEach((row) => {
      const record = {};

      row.forEach((cell, index) => {
        record[fieldNames[index] || getFallbackFieldName(index)] = getPrimitiveCellValue(cell, index, dimensionCount);
      });

      records.push(record);
    });

    return records;
  }, []);
};

export const getAutomationHypercubeData = (hypercube = {}, useSimplifiedJsonFormat = false) => {
  if (!useSimplifiedJsonFormat) {
    return Array.isArray(hypercube.qDataPages) ? hypercube.qDataPages : [];
  }

  return convertHypercubeToRecords(hypercube);
};
