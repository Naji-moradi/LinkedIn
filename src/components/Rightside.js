import styled from "styled-components";
import Chip from "@mui/material/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h4>Add to your feed</h4>
          <img
            style={{ cursor: "pointer" }}
            src="/images/feed-icon.svg"
            alt=""
          />
        </Title>

        <div className="d-flex">
          <span className="text-lg px-2">
            <strong>•</strong>
          </span>
          <div className="text-start ml-3">
            <h6 className="m-0">It firms mosty searching </h6>
            <p className="m-0">
              <small>1d ago • 8743 readers </small>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <span className="text-lg px-2">
            <strong>•</strong>
          </span>
          <div className="text-start ml-3">
            <h6 className="m-0">
              {" "}
              Here is the Certificate of Web development{" "}
            </h6>
            <p className="m-0">
              <small>1d ago • 8743 readers </small>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <span className="text-lg px-2">
            <strong>•</strong>
          </span>
          <div className="text-start ml-3">
            <h6 className="m-0">It firms mosty searching for employee</h6>
            <p className="m-0">
              <small>1d ago • 8743 readers </small>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <span className="text-lg px-2">
            <strong>•</strong>
          </span>
          <div className="text-start ml-3">
            <h6 className="m-0">Here is the Certificate of Web </h6>
            <p className="m-0">
              <small>1d ago • 8743 readers </small>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <span className="text-lg px-2">
            <strong>•</strong>
          </span>
          <div className="text-start ml-3">
            <h6 className="m-0">It firms mosty searching searching for...</h6>
            <p className="m-0">
              <small>1d ago • 8743 readers </small>{" "}
            </p>
          </div>
        </div>
        <div className="d-flex p-3">
          <Stack>
            <Chip
              sx={{ cursor: "pointer" }}
              label="Show more  ˅"
              deleteIcon={<KeyboardArrowDownIcon />}
            />
          </Stack>
        </div>
      </FollowCard>
      <div className="stiky-po">
        <BannerCard>
          <div className="stiky-po">
            <div className="text-end">
              <MoreHorizIcon sx={{ cursor: "pointer" }} />
            </div>
            <div className="text-middle">
              <small>Get the latest jobs and industry news</small>{" "}
            </div>
            <div className="text-middl py-3 ">
              <img
                className="img1"
                src="https://cdn.xxl.thumbs.canstockphoto.com/the-portrait-of-the-young-girl-about-9-12-years-old-with-the-blonde-and-loose-hair-that-sits-on-the-stock-photography_csp24429108.jpg"
                alt="Avatar"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className="text-middle px-3 pb-2">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                illo.
              </small>
            </div>
            <div className="text-middle">
              <Button sx={{ borderRadius: 28 }} variant="outlined">
                Follow
              </Button>
            </div>
          </div>
        </BannerCard>
        <footer className="footer">
          <div>
            <span>About</span>
            <span>Accessibility</span>
            <span>Help Center</span>
          </div>
          <div>
            <span>
              Privacy & Terms {<KeyboardArrowDownIcon className="downArrow" />}
            </span>
            <span>Ad Choices</span>
          </div>
          <div>
            <span>Advertising </span>
            <span>
              Business Services{" "}
              {<KeyboardArrowDownIcon className="downArrow" />}
            </span>
          </div>
          <div>
            <span>Get the LinkedIn app</span>
            <span>More</span>
          </div>
          <div className="corporation">
            <span className="linked">
              Linked <span className="in">in</span>
            </span>
            <span>LinkedIn corporation © 2022</span>
          </div>
        </footer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const BannerCard = styled.div`
  margin-top: 20px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;

  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;
