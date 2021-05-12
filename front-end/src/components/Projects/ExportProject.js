import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ExportProject() {

  const API_URL = 'http://localhost:8081';
  const user = JSON.parse(localStorage.getItem("token"));


  const downloadData = () => {
    fetch(API_URL + '/api/projects/export', {
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'Projects.csv';
          a.click();
        });
      });
  }

  return (
    <div>

      <Button variant="outline-dark" onClick={downloadData} className="my-2 my-sm-0 btn-sm">
        Export projects
      </Button>

    </div>
  )
}
