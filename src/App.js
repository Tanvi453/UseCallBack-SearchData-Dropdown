import { useState, useCallback } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState({ fname: '', dob: '', age: '', Password: '' });

  const [searched, setSearched] = useState("");

  const [selected, setSelected] = useState("");

  const [data, setData] = useState(JSON.parse(localStorage.getItem("people")) || []);

  const handleChange = (e) => {
    console.log(e.target.name)
    setPeople({ ...people, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, people])
    localStorage.setItem("people", JSON.stringify([...data, people]));
  }
  console.log(data);
  console.log(people);

  const handlesearch = useCallback((idx) => {
    if (selected === "w") {
      return (data.filter((item) => item?.fname?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }

    else if (selected === "x") {
      return (data.filter((item) => item?.dob?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }

    else if (selected === "y") {
      return (data.filter((item) => item?.age?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }

    else if (selected === "z") {
      return (data.filter((item) => item?.Password?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }

    return data

  }, [data, selected])


  // const searchData = () => {

  //   // const filteredData = data.filter((item) => { return (item?.fname?.toLocaleLowerCase() === searched?.toLocaleLowerCase()) });
  //   // console.log(filteredData);
  //   // setData([...filteredDataa]);


  //   const filteredDataa = data.filter((item) => { return (item?.fname?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
  //   console.log(filteredDataa);
  //   setData([...filteredDataa]);


  // }

  return (
    <>
      <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: "cover", height: "953px", width: "100%" }}>

        <div className='flex flex-col items-center gap-[60px] pt-[7%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor="fname" className='font-bold text-xl text-[#27262b]'>Full Name:</label>
            <input type="text" id="fname" name="fname" value={people.fname} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#5ba04e]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="dob" className='font-bold text-xl text-[#27262b]'>Date Of Birth:</label>
            <input type="date" id='dob' name="dob" value={people.dob} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#5ba04e]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="age" className='font-bold text-xl text-[#27262b]'>Age:</label>
            <input type="number" id='age' name="age" value={people.age} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#5ba04e]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="Password" className='font-bold text-xl text-[#27262b]'>Password:</label>
            <input type="password" id="Password" name="Password" value={people.Password} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#5ba04e]' />
          </div>

          <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent border-[#5ba04e] text-[#27262b]' >Submit</button>

        </div>

      </div>

      <div className='flex gap-[20px] justify-center mt-[30px]' >

        <input type="search" id="search" name="search" value={searched} onChange={(e) => setSearched(e.target.value)} className='border-[#5ba04e] rounded-[5px] h-[30px] w-[300px]' />

        <div>
          <select onChange={(e) => setSelected(e.target.value)} className='h-[30px] w-[180px] bg-transparent text-[16px] font-bold text-[#27262b] border-[#5ba04e] border-2 rounded-[5px]'>
            <option value="">Select Field:</option>
            <option value="w">Full Name</option>
            <option value="x">Date Of Birth</option>
            <option value="y">Age</option>
            <option value="z">Password</option>
          </select>
        </div>

      </div >


      <div className='flex gap-[20px] justify-center mt-[30px]'>

        <table>

          <thead>
            <th>Full Name:</th>
            <th>Date Of Birth:</th>
            <th>Age:</th>
            <th>Password:</th>
          </thead>

          <tbody>

            {handlesearch(searched)?.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.dob}</td>
                  <td>{item.age}</td>
                  <td>{item.Password}</td>
                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;
