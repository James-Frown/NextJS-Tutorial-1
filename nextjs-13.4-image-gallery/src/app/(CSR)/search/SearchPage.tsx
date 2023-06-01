"use client"

import { FormEvent } from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchPage() {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();

        // when you need api keys use the process.env.(key) as it will keep your private api keys away from client browser and on your own backend server.
        if (query) {
            alert(query);
        }
    }

    return (
        <>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="search-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control
                            name="query"
                            placeholder="E.g. Cats, Hotdogs, ..."
                        />
                    </Form.Group>
                    <Button type="submit" className="rb-3">
                        Search
                    </Button>
                </Form>
            </div>
        </>
    );
}