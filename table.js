<Box
  sx={{
    width: "222px",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  }}
>
  <Box>
    <Box
      sx={{
        width: "210px",
        display: "flex",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <Typography className="">Qabul qilingan</Typography>
      <span className="spanN" style={{ padding: "5px 15px", fontSize: "12px" }}>
        {statusCounts.accepted}
      </span>
    </Box>
    <Box
      sx={{
        width: "100%",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        mt: 1,
        py: 1,
        px: 2,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="#11ACFD"
        />
      </svg>
      <span>{allSumAccepted} UZS</span>
    </Box>
  </Box>
  {buyurtmalarD
    .filter((i) => i.status === "accepted")
    .map((item) => {
      return (
        <>
          <Box
            sx={{
              width: "100%",
              background: "#fff",
              p: 2,
              borderRadius: "10px",
              "&:hover": {
                boxShadow: "0px 2px 26px 1px rgba(34, 60, 80, 0.2)",
                transform: "scale(1.01)",
                transition: ".4s",
              },
              minHeight: "370px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderBottom: "2px solid #979797",
                pb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    background: "#11ACFD",
                    color: "#fff",
                    borderRadius: "18px",
                    p: "3px 10px",
                    fontSize: "14px",
                    mr: 1,
                  }}
                >
                  {item.id}
                </Typography>
                <Box
                  sx={{
                    background: "#EDEFF3",
                    borderRadius: "18px",
                    width: "35px",
                    height: "35px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 15.1429L6.5 11.2143L1 15.1429V2.57143C1 1.70355 1.70355 1 2.57143 1H10.4286C11.2964 1 12 1.70355 12 2.57143V15.1429Z"
                        stroke="#2D3A45"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </Box>
              </Box>

              <Box
                sx={{
                  gap: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={clockImg} />
                <Typography sx={{ fontSize: "14px" }}>{item.time}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                mt: 3,
                cursor: "pointer",
              }}
              onClick={() => {
                handleOpen();
                setInfo(item);
              }}
            >
              <img src={userImg} />
              <Box sx={{ marginTop: "-5px" }}>
                <Typography
                  sx={{
                    textAlign: "start",
                    color: "#2D3A45",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#2D3A45",
                    fontSize: "13px",
                    opacity: "0.3",
                  }}
                >
                  {item.phone}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                borderBottom: "2px solid #979797",
                pb: 1,
                mb: 2,
              }}
            >
              <Box sx={{ marginTop: "" }}>
                <Typography
                  sx={{
                    color: "#8D9BA8",
                    fontSize: "12px",
                    fontWeight: "bold",
                    ml: "-15px",
                  }}
                >
                  Umumiy summa
                </Typography>
                <Typography sx={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "700" }}>
                    {item.productsPrice}
                    {/* {item.orders.map((or) => or.price)} */}
                  </span>{" "}
                  UZS
                </Typography>
              </Box>
              <img src={paymeImg} style={{ width: "50px", marginTop: "6px" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ color: "#8D9BA8", fontSize: "12px" }}>
                    Operator:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "SFProDisplay",
                      color: "#2D3A45",
                      fontWeight: "600",
                      fontStyle: "normal",
                      lineHeight: "18px",
                      letterSpacing: "0.467px",
                    }}
                  >
                    {item.operator}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#8D9BA8", fontSize: "12px" }}>
                    Filial:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "SFProDisplay",
                      color: "#2D3A45",
                      fontWeight: "600",
                      fontStyle: "normal",
                      lineHeight: "18px",
                      letterSpacing: "0.467px",
                      width: "120px",
                    }}
                  >
                    {item.flial}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="x"
                  onClick={() => {
                    setStatusX(item.id);
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99974 5.586L11.9497 0.636002L13.3637 2.05L8.41374 7L13.3637 11.95L11.9497 13.364L6.99974 8.414L2.04974 13.364L0.635742 11.95L5.58574 7L0.635742 2.05L2.04974 0.636002L6.99974 5.586Z"
                      fill="#03053D"
                    />
                  </svg>
                </button>

                <button
                  className="x"
                  onClick={() => {
                    setStatusOK(item.id);
                  }}
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1L5.375 10.625L1 6.25"
                      stroke="#2D3A45"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </button>
              </Box>
            </Box>
          </Box>
        </>
      );
    })}
</Box>;
