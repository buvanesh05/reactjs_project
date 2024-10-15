import React from 'react';
import { Dashboardstates } from '../../../Constants/Data';

const DashboardStates = () => {
    return (
        <div className="dashboard-states" style={{ border: '1px solid rgba(242, 244, 247, 1)', borderRadius: '8px' }}>
            <div className='overflow-hidden rounded'>
                <table className="border-collapse border-[rgba(242, 244, 247, 1)] max-w-[422px] max-h-[208px]">
                    <tbody>
                        {Dashboardstates.reduce((rows, state, index) => {
                            if (index % 3 === 0) {
                                rows.push([]);
                            }
                            rows[rows.length - 1].push(state);
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <tr key={rowIndex} className="sm:table-row  sm:grid-cols-3 gap-4">
                                {row.map((state, cellIndex) => (
                                    <td key={cellIndex} className="stat-item border-[rgba(242, 244, 247, 1)] py-8 px-4">
                                        <div className='flex flex-row items-center gap-3'>
                                            <img src={state.image} alt={state.title} className="state-image w-8 h-8" />
                                            <span>
                                                <p className='font-semibold text-2xl leading-[29.05px] text-slate-950'>{state.value}</p>
                                                <p className='text-sm font-medium leading-[14.52px] text-slate-400'>{state.title}</p>
                                            </span>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardStates;
