import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleSearchTeachers(event: FormEvent) {
    event.preventDefault();

    api.get('/classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    })
      .then(response => {
        setTeachers(response.data)
      });
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Historia', label: 'Historia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={(event) => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terca' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            name="time"
            label="Hora"
            type="time"
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
