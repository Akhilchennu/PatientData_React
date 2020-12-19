import React from 'react';
import { Table, Card } from '@innovaccer/design-system';
import { loaderSchema, schema } from '../constants/constants'

const TableData = (props) => {
    const data = props.patientInfo;
    const translateData = (schema, data) => {
        let newData = data;

        if (schema.translate) {
            const translatedData = schema.translate(data);
            newData = {
                ...newData,
                [schema.name]: typeof translatedData === 'object' ? {
                    ...newData[schema.name],
                    ...translatedData
                } : translatedData
            };
        }
        if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

        return newData;
    }

    const filterData = (schema, data, filterList) => {
        let filteredData = data;
        if (filterList) {
            Object.keys(filterList).forEach(schemaName => {
                const filters = filterList[schemaName];
                const sIndex = schema.findIndex(s => s.name === schemaName);
                const { onFilterChange } = schema[sIndex];
                if (filters.length && onFilterChange) {
                    filteredData = filteredData.filter(d => onFilterChange(d, filters));
                }
            });
        }

        return filteredData;
    };

    const sortData = (schema, data, sortingList) => {
        const sortedData = [...data];
        sortingList.forEach(l => {
            const sIndex = schema.findIndex(s => s.name === l.name);
            if (sIndex !== -1) {
                const defaultComparator = (a, b) => {
                    const aData = translateData(schema[sIndex], a);
                    const bData = translateData(schema[sIndex], b);
                    return aData[l.name].title.localeCompare(bData[l.name].title);
                };

                const {
                    comparator = defaultComparator
                } = schema[sIndex];

                sortedData.sort(comparator);
                if (l.type === 'desc') sortedData.reverse();
            }
        });

        return sortedData;
    };

    const fetchData = (options) => {
        const {
            page,
            pageSize,
            sortingList,
            filterList,
            searchTerm
        } = options;

        const onSearch = (d, searchTerm = '') => {
            debugger
            return (
                d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
        }
        const filteredData = filterData(schema, data, filterList);
        const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
        const sortedData = sortData(schema, searchedData, sortingList);

        if (page && pageSize) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const start = (page - 1) * pageSize;
                    const end = start + pageSize;
                    const slicedData = sortedData.slice(start, end);
                    resolve({
                        schema,
                        count: sortedData.length,
                        data: slicedData,
                    });
                }, 2000);
            });
        }

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    schema,
                    count: sortedData.length,
                    data: sortedData,
                });
            }, 2000);
        });
    }

    const onRowSelect=(rowIndex)=>{
        props.getIndiInfo(rowIndex.patientid);
    }

    return (
        <div className="tableHeight">
            <Card>
                <Table
                    loaderSchema={loaderSchema}
                    fetchData={fetchData}
                    type="resource"
                    withHeader={true}
                    headerOptions={{
                        withSearch: true
                    }}
                    onRowClick={(rowIndex) => onRowSelect(rowIndex)}
                    withPagination={true}
                    pageSize={5}
                    onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
                />
            </Card>
        </div>
    );
};

export default TableData;