"use client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
const CancelButton = ({bookingId}) => {
    const handleCancelBooing = async()=>{
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        const data = await res.json()
        console.log(data);
        window.location.reload();
    }

    return (
       <AlertDialog>
     
  <Button
    className="rounded-md border border-red-500 text-red-500 w-full md:w-auto"
    variant="outline"
  >
    <TrashBin />
    Cancel
  </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooing} slot="close" variant="danger">
             confirm delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default CancelButton;