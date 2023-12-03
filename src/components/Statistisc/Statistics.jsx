import React, { Component } from 'react';
import StatisticsCss from '../Statistisc/StatisticsCss.module.css'
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={StatisticsCss.statisticsList}>
        <li className={StatisticsCss.item}>Good: {good}</li>
        <li className={StatisticsCss.item}>Neutral: {neutral}</li>
        <li className={StatisticsCss.item}>Bad: {bad}</li>
        <li className={StatisticsCss.item}>Total: {total}</li>
        <li className={StatisticsCss.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

export default Statistics;