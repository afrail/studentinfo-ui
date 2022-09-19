import { Button, Col, Form, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";

type IEducationInfoProps = {
	control: any;
	register: any;
};

const EducationInfo = ({ register, control }: IEducationInfoProps) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: "education",
	});

	const onAdd = () => {
		append({
			examName: null,
			passingYear: null,
			board: null,
		});
	};

	const date = new Date();

	return (
		<>
			{fields?.map((item, idx) => (
				<Row key={item?.id}>
					<Col>
						<Form.Label htmlFor="examName">Exam name</Form.Label>
						<Form.Select
							aria-label="Exam name"
							id="examName"
							placeholder="Select exam name"
							{...register(`education.${idx}.examName` as const, {
								required: true,
							})}
						>
							<option>Select exam name</option>
							<option value="SSC">SSC</option>
							<option value="HSC">HSC</option>
							<option value="BSC">JSC</option>
							<option value="BSC">MSC</option>
						</Form.Select>
					</Col>
					<Col>
						<Form.Label htmlFor="passingYear">Year of passing</Form.Label>
						<Form.Control
							id="passingYear"
							type="number"
							min={1970}
							max={date.getFullYear()}
							placeholder="Choose passing year"
							{...register(`education.${idx}.passingYear` as const, {
								required: true,
								valueAsNumber: true,
								min: 1970,
								max: date.getFullYear(),
							})}
						/>
					</Col>
					<Col>
						<Form.Label htmlFor="board">Board</Form.Label>
						<Form.Select
							aria-label="Select board"
							id="board"
							placeholder="Select board"
							{...register(`education.${idx}.board` as const, {
								required: true,
							})}
						>
							<option>Choose board</option>
							<option value="dhaka">Dhaka</option>
							<option value="chittagang">Barishal</option>
							<option value="cumilla">Khulna</option>
						</Form.Select>
					</Col>
					<Col md={2}>
						<div className="d-flex align-items-end gap-2 h-100">
							<Button
								variant="danger"
								onClick={() => remove(idx)}
								disabled={fields.length === 1}
							>
								X
							</Button>
							{fields.length - 1 === idx && (
								<Button variant="info" onClick={onAdd}>
									Add
								</Button>
							)}
						</div>
					</Col>
				</Row>
			))}
		</>
	);
};

export default EducationInfo;
