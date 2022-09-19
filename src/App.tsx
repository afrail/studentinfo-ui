import axios from "axios";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./App.css";
import EducationInfo from "./EducationInfo";

function App() {
	const { register, handleSubmit, control } = useForm<any>({
		mode: "onChange",
		defaultValues: {
			education: [
				{
					examName: null,
					passingYear: null,
					board: null,
				},
			],
		},
	});

	const onFormSubmit = (data: any) => {
		axios
			.post("http://localhost:8081/student", data)
			.then(
				(res) => res.status === 200 && alert("Information saved successfully")
			)
			.catch((err) => alert("Something went wrong."));
	};

	return (
		<Container fluid="md">
			<h3 className="text-primary mt-5">Student</h3>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<div className="card my-4 p-4">
					<Card.Title className="mb-4">Student information</Card.Title>
					<Row>
						<Col>
							<InputGroup className="mb-3">
								<InputGroup.Text id="code">Code</InputGroup.Text>
								<Form.Control
									id="code"
									aria-describedby="code"
									required
									{...register("info.code", { required: true })}
								/>
							</InputGroup>
						</Col>
						<Col>
							<InputGroup className="mb-3">
								<InputGroup.Text id="name">Name</InputGroup.Text>
								<Form.Control
									id="name"
									aria-describedby="name"
									required
									{...register("info.name", { required: true })}
								/>
							</InputGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<InputGroup className="mb-3">
								<InputGroup.Text id="dob">Date of birth</InputGroup.Text>
								<Form.Control
									id="dob"
									type="date"
									aria-describedby="dob"
									required
									{...register("info.dob", { required: true })}
								/>
							</InputGroup>
						</Col>
						<Col>
							<InputGroup className="mb-3">
								<InputGroup.Text id="gender">Gender</InputGroup.Text>
								<Form.Select
									aria-label="Select gender"
									{...register("info.gender", { required: true })}
								>
									<option>Select gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</Form.Select>
							</InputGroup>
						</Col>
					</Row>
				</div>
				<div className="card mb-4 p-4">
					<Card.Title className="mb-4">Student education</Card.Title>
					<EducationInfo control={control} register={register} />
					{/* <Row>
						<Col>
							<Form.Label htmlFor="examName">Exam name</Form.Label>
							<Form.Select
								aria-label="Exam name"
								id="examName"
								name="examName"
								onChange={onInputChange}
							>
								<option>Select exam name</option>
								<option value="JSC">JSC</option>
								<option value="SSC">SSC</option>
								<option value="HSC">HSC</option>
							</Form.Select>
						</Col>
						<Col>
							<Form.Label htmlFor="passingYear">Year of passing</Form.Label>
							<Form.Control
								id="passingYear"
								name="passingYear"
								type="text"
								onChange={onInputChange}
							/>
						</Col>
						<Col>
							<Form.Label htmlFor="board">Board</Form.Label>
							<Form.Select
								aria-label="Select board"
								id="board"
								name="board"
								onChange={onInputChange}
							>
								<option>Choose board</option>
								<option value="dhaka">Dhaka</option>
								<option value="chittagang">Chittagong</option>
								<option value="cumilla">Cumilla</option>
							</Form.Select>
						</Col>
						<Col md={2}>
							<div className="d-flex align-items-end gap-2 h-100">
								<Button color="info">+ Add</Button>
								<Button color="danger">Remove</Button>
							</div>
						</Col>
					</Row> */}
				</div>
				<Button className="w-25" type="submit">
					Save
				</Button>
			</form>
		</Container>
	);
}

export default App;
